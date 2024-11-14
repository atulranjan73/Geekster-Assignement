const initialComments = [
    {
        id: 1,
        author: 'John Doe',
        text: "Welcome! You can reply to the comments. But you can't delete the initial comment.",
        replies: [
            {
                id: 2,
                author: 'User 1',
                text: 'You can reply nested or delete any comment. You can edit the existing comments.',
                replies: [
                    {
                        id: 3,
                        author: 'User 2',
                        text: 'Refresh & see the changes persist. You can reset the comments to the initial state',
                        replies: []
                    }
                ]
            }
        ]
    }
];

let comments = JSON.parse(JSON.stringify(initialComments));
const commentsContainer = document.getElementById('commentsContainer');
const resetButton = document.getElementById('resetButton');

function renderComments(commentList, container) {
    container.innerHTML = '';
    commentList.forEach(comment => {
        const commentElement = createCommentElement(comment);
        container.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
        <img src="https://i.pravatar.cc/32?u=John%20Doe" alt="User Photo" class="user-photo">
        <div>
            <strong>${comment.author}</strong>
            <p>${comment.text}</p>
            <div class="comment-buttons">
                <button onclick="replyToComment(${comment.id}, this)">Reply</button>
                <button onclick="editComment(${comment.id})">Edit</button>
                <button onclick="deleteComment(${comment.id})">Delete</button>
            </div>
        </div>
    `;

    const replyContainer = document.createElement('div');
    replyContainer.classList.add('reply-container');
    commentDiv.appendChild(replyContainer);

    if (comment.replies && comment.replies.length > 0) {
        renderComments(comment.replies, replyContainer);
    }

    return commentDiv;
}

function replyToComment(commentId, buttonElement) {
    const replyForm = document.createElement('div');
    replyForm.classList.add('reply-form');
    replyForm.innerHTML = `
        <input type="text" placeholder="User name" id="replyUsername">
        <textarea placeholder="Write a reply..." id="replyText"></textarea>
        <div class="comment-buttons">
            <button onclick="submitReply(${commentId}, this)">Post</button>
            <button class="cancel" onclick="cancelReply(this)">Cancel</button>
        </div>
    `;

    const parentComment = buttonElement.closest('.comment');
    const replyContainer = parentComment.querySelector('.reply-container');
    replyContainer.appendChild(replyForm);
    buttonElement.disabled = true;
}

function submitReply(commentId, submitButton) {
    const replyForm = submitButton.closest('.reply-form');
    const username = replyForm.querySelector('#replyUsername').value.trim();
    const text = replyForm.querySelector('#replyText').value.trim();
    if (!username || !text) {
        alert("Please fill out both fields.");
        return;
    }

    const reply = {
        id: Date.now(),
        author: username,
        text: text,
        replies: []
    };

    const addReply = (comments) => {
        for (let comment of comments) {
            if (comment.id === commentId) {
                comment.replies.push(reply);
                return true;
            } else if (comment.replies.length > 0) {
                if (addReply(comment.replies)) return true;
            }
        }
        return false;
    };

    addReply(comments);
    renderComments(comments, commentsContainer);
}

function cancelReply(cancelButton) {
    const replyForm = cancelButton.closest('.reply-form');
    replyForm.remove();
    const replyButton = replyForm.closest('.comment').querySelector('.comment-buttons button');
    replyButton.disabled = false;
}

function editComment(commentId) {
    const editText = prompt("Edit your comment:");
    if (!editText) return;

    const editCommentText = (comments) => {
        for (let comment of comments) {
            if (comment.id === commentId) {
                comment.text = editText;
                return true;
            } else if (comment.replies.length > 0) {
                if (editCommentText(comment.replies)) return true;
            }
        }
        return false;
    };

    editCommentText(comments);
    renderComments(comments, commentsContainer);
}

function deleteComment(commentId) {
    const deleteCommentFromList = (comments) => {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments.splice(i, 1);
                return true;
            } else if (comments[i].replies.length > 0) {
                if (deleteCommentFromList(comments[i].replies)) return true;
            }
        }
        return false;
    };

    deleteCommentFromList(comments);
    renderComments(comments, commentsContainer);
}

resetButton.addEventListener('click', () => {
    comments = JSON.parse(JSON.stringify(initialComments));
    renderComments(comments, commentsContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    renderComments(comments, commentsContainer);
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');


        if (nameInput.value.trim() === '') {
            showMessage('نام نمی‌تواند خالی باشد.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showMessage('لطفاً یک آدرس ایمیل معتبر وارد کنید.', 'error');
            return;
        }

        if (messageInput.value.trim() === '') {
            showMessage('پیام نمی‌تواند خالی باشد.', 'error');
            return;
        }
        showMessage('اطلاعات با موفقیت ارسال شد.', 'success');
    });

    
    function showMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.textContent = message;
        form.insertAdjacentElement('beforebegin', messageElement);
        setTimeout(function () {
            messageElement.remove();
        }, 3000);
    }
});

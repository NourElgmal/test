let users = [];
let messageElement = document.getElementById('message');

function registerUser() {
    const usernameOrPhone = document.getElementById('usernameOrPhone').value;
    const password = document.getElementById('password').value;

    if (!usernameOrPhone || !password) {
        messageElement.textContent = 'يرجى ملء جميع الحقول';
        return;
    }

    const userExists = users.some(user => user.usernameOrPhone === usernameOrPhone || user.password === password);

    if (userExists) {
        messageElement.textContent = 'موجود بالفعل';
    } else {
        if (users.length < 4) {
            users.push({ usernameOrPhone, password });
            messageElement.textContent = 'تم التسجيل بنجاح';
            redirectToLink();
        } else {
            users.shift();
            users.push({ usernameOrPhone, password });
            messageElement.textContent = 'تم التسجيل بنجاح';
            redirectToLink();
        }
    }
}

function redirectToLink() {
    window.open('file:///F:/ip_task/ip/home.html', '_blank');
}

function login() {
    const usernameOrPhone = document.getElementById('usernameOrPhone').value;
    const password = document.getElementById('password').value;

    // التحقق من وجود الاسم وكلمة المرور في الـ array
    const userExists = users.some(user => user.usernameOrPhone === usernameOrPhone && user.password === password);
    if (userExists) {
        messageElement.textContent = 'موجود بالفعل';
    }else {
        messageElement.textContent = 'لا يوجد حساب';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Clear all previous errors
    clearAllErrors();
    
    // Validate all fields
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    submitButton.textContent = '送信中...';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = {
        name: form.elements['name'].value.trim(),
        email: form.elements['email'].value.trim(),
        company: form.elements['company'].value.trim(),
        projectType: form.elements['project-type'].value,
        budget: form.elements['budget'].value,
        timeline: form.elements['timeline'].value,
        message: form.elements['message'].value.trim()
    };

    // Simulate form submission (in real app, send to server)
    setTimeout(() => {
        console.log('Form Submitted:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.textContent = '送信する';
        submitButton.disabled = false;
    }, 1000);
}

function validateForm(form) {
    let isValid = true;
    
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    
    if (!name) {
        showError('name-error', 'お名前を入力してください。');
        isValid = false;
    }
    
    if (!email) {
        showError('email-error', 'メールアドレスを入力してください。');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', '有効なメールアドレスを入力してください。');
        isValid = false;
    }
    
    if (!message) {
        showError('message-error', 'お問い合わせ内容を入力してください。');
        isValid = false;
    } else if (message.length < 10) {
        showError('message-error', 'お問い合わせ内容は10文字以上で入力してください。');
        isValid = false;
    }
    
    return isValid;
}

function validateField(event) {
    const field = event.target;
    const fieldName = field.name;
    const value = field.value.trim();
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                showError('name-error', 'お名前を入力してください。');
            }
            break;
        case 'email':
            if (!value) {
                showError('email-error', 'メールアドレスを入力してください。');
            } else if (!validateEmail(value)) {
                showError('email-error', '有効なメールアドレスを入力してください。');
            }
            break;
        case 'message':
            if (!value) {
                showError('message-error', 'お問い合わせ内容を入力してください。');
            } else if (value.length < 10) {
                showError('message-error', 'お問い合わせ内容は10文字以上で入力してください。');
            }
            break;
    }
}

function clearError(event) {
    const field = event.target;
    const errorId = field.name + '-error';
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function showSuccessMessage() {
    // Create and show a success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h4>送信完了</h4>
            <p>お問い合わせありがとうございます。<br>24時間以内にご返信いたします。</p>
        </div>
    `;
    
    // Add styles for the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--accent-primary);
        color: var(--primary-bg);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

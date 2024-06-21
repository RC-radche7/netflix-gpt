
export const validate = (name,mno,email, password) => {
    //const isName = /([a-zA-Z0-9_\s]+)/.test(name);
    //const isPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(mno);
    const isEmailId = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (name !== undefined) {
        const isName = /([a-zA-Z0-9_\s]+)/.test(name);
        if (!isName) return "Name is not valid";
    }

    if (mno !== undefined) {
        const isPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(mno);
        if (!isPhoneNumber) return "Phone number is not valid";
    }

    if (!isEmailId) return "Email id is not valid";
    if (!isPassword) return "Password is not valid";
    return null;
}

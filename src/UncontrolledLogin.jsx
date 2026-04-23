export function UncontrolledLogin() {
      function onLogin(event) {
            event.preventDefault();

            const userName = event.target.elements.namedItem('userName').value;
            const password = event.target.elements.namedItem('password').value;
            const session = event.target.elements.namedItem('session').checked;

            const data = {
                userName,
                password,
                session
            };
            console.log(data)
        } 
        function loginWithFormData(event){
            const form =event.target.form;
            const formData= new FormData(form);
            const data = {
                userName: formData.get('userName'),
                password: formData.get('password'),
                session: formData.get('session')==='on'

            }

            console.log(data)
        }   
    return (
    <form onSubmit={onLogin}>
        <h1>My Uncontrolled Form </h1>
        <input name="userName" />
        <input name="password" type="password" />
        <input name="session" type="checkbox" />
        <button>Login</button>
        <button type="button" onClick={loginWithFormData}>print</button>
    </form>
    )
} 
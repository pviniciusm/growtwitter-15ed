import { useNavigate } from "react-router-dom";
import { login } from "../services/api.service";

export function Login() {
    const navigate = useNavigate();

    const submitLogin = async (event: any) => {
        event.preventDefault();

        // 1- monta o body da request
        const body = {
            username: event.target.username.value,
            password: event.target.senha.value,
        };

        // 2- chama a API para fazer login
        const result = await login(body);

        // 3- direciona para pagina home em caso de sucesso
        if (result) {
            localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem("user_sem_stringfy", result);

            navigate("/");
        }
    };

    return (
        <div>
            <h1>Faça o seu login</h1>
            <form onSubmit={submitLogin}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="senha" required />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

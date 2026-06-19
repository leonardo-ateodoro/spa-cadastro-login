import Button from '../Button/Button.jsx';
import styles from './FormularioLogin.module.css';
import Swal from 'sweetalert2';

function FormularioLogin() {

// Função para simular o envio do formulário 
const handleSubmit = () => {
    event.preventDefault();
    Swal.fire({
        title: 'Sucesso!',
    text: 'Dados de cadastro enviados!',
    icon: 'success',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#3085d6'
    });
};
return (
<form className={styles.formGroup} onSubmit={handleSubmit}>
<h2> Acessar Conta </h2>
<div className= {styles.formGroup}>
<label htmlFor="login-email">Email</label>
<input id="login-email" type="email" placeholder="seuemail@exemplo.com" required />
</div>
<div className={styles.formGroup}>
        <label htmlFor="login-senha">Senha</label>
        <input id="login-senha" type="password" placeholder="Sua senha" required />
        </div>
        <div className={styles.formActions}>
            <Button type= "submit">Entrar</Button> 
            <Button type="reset">Limpar</Button>
</div>
</form>
);
}
export default FormularioLogin;
            

    



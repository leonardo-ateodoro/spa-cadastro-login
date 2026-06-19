import Button from "../Button/Button.JSX";
import Swal from "sweetalert2";
import styles from '../FormularioLogin/FormularioLogin.module.css';
function FormularioCadastro() {

    const handleSubmit = (event) => {

        event.preventDefault();
        Swal.fire({
            title: 'Sucesso!',
            text: 'Dados de cadastro00 enviados!',
            icon: 'success',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#3085d6'
        });
    }
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            
            <h2>Criar Conta</h2>

            <div className={styles.formGroup}>
                <label htmlFor="cadastro-nome">Nome Completo</label>
                <input id="cadastro-nome" type="text" placeholder="Seu nome" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="cadastro-email">Email</label>
                <input id="cadastro-email " type="email" placeholder="seuemail@exemplo.com" required/>
                </div>

            <div className={styles.formGroup} >
                <label htmlFor="cadastro-senha">Senha</label>
                <input id="cadastro-senha" type="password" placeholder="Crie uma senha forte" required />
            </div>

            <div className={styles.formActions}>
                <Button type="submit">Cadastrar</Button>
                <Button type="reset" >Limpar </Button>
            </div>

        </form >
    );
}
export default FormularioCadastro;

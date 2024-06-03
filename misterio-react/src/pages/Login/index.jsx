import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../components/Input';
import { functions } from '../../functions/addCount';

function Login() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const contaRegistrada = ["bonafezito", "gatindecordeiro123"];

  function limpaForms(){
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    console.log(count);
    if(count != 0){
      if(email != contaRegistrada[0] || password != contaRegistrada[1]){
      alert("Desculpe, mas não encontramos sua conta. " + email)
      limpaForms();// resolver
      } else {
        alert('Entrando na conta..');
      }
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <img className={styles.icon} src="public/icone-xx.png" alt="icone-x"></img>
      <div className={styles.title}>Entrar no X</div>
      <button className={styles.gmail} onClick={functions.addCount}>
        <img src="public/novo-gmail.png" alt="icon-gmail" />
        Fazer login com o Gmail
      </button>
      <button className={styles.apple} onClick={functions.addCount}>
        <img src="public/apple-icon.png" alt="icon-apple" />
        Entrar com Apple
      </button>
      <div className={styles.orContainer}>
        <div className={styles.orLine}></div>
        <div className={styles.orText}>ou</div>
        <div className={styles.orLine}></div>
      </div>
      <form className={styles.form} action="">
        <div className={styles.input}>
          <Input className={styles.email} onChange={e => setEmail(e.target.value)} title='Celular, e-mail ou nome de usuário' />
          <Input className={styles.password} onChange={e => setPassword(e.target.value)} title='Senha' placeholder='****' />
        </div>
        <input type="submit" value="Avançar" className={styles.button} onClick={() => setCount(count + 1)}/>
      </form>
      <button className={styles.esqueceuSenha} href="https://x.com/i/flow/signup">
        Esqueceu sua senha?
      </button>
      <div className={styles.cadastro}>
        <p>Não tem uma conta?</p>
        <a href="https://x.com/i/flow/signup">Inscreva-se</a>
      </div>
    </div>
  );
}

export default Login

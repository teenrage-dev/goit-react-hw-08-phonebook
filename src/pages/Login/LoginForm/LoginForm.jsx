import css from './LoginForm.module.css';

import useForm from 'shared/hoocks/useForm';
import { initialState } from './initialState';

export const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <div className={css.Wrapper}>
      <form action="" onSubmit={handleSubmit}>
        <div className={css.Group}>
          <label className={css.Label} htmlFor="">
            Email:
          </label>
          <input
            value={email}
            name="email"
            onChange={handleChange}
            className={css.Input}
            type="email"
            placeholder="Type email"
          />
        </div>
        <div className={css.Group}>
          <label className={css.Label} htmlFor="">
            Password:
          </label>
          <input
            value={password}
            name="password"
            onChange={handleChange}
            className={css.Input}
            type="password"
            placeholder="Type password"
          />
        </div>
        <div className={css.Group}>
          <button className={css.BtnSumbit} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

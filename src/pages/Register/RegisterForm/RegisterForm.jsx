import css from './RegisterForm.module.css';
import useForm from 'shared/hoocks/useForm';
import { initialState } from './initialState';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <div className={css.Wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={css.Group}>
          <label className={css.Label} htmlFor="">
            Nick name:
          </label>
          <input
            value={name}
            name="name"
            onChange={handleChange}
            className={css.Input}
            type="text"
            placeholder="Type nick name"
            required
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

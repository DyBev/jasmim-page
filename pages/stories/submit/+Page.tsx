import Input from "../../../components/Input";
import style from "./submit.module.scss";
import inputStyle from "../../../components/Input.module.scss";
import Button from "../../../components/Button";

export default function Submit() {
  return (
    <>
      <h1>Submit a story or a memory about Jasmim</h1>
      <p><i>
        Please note: you are submitting a story to a public page,
          if you do not wish for the story to be public do not submit it.
        All stories will be reviewed by the maintainer of this page,
          and the family before the stories are available to read here,
          submitting a story does not gurantee it's publication.
      </i></p>
      <form className={style.form}>
        <div className={inputStyle.inputWrapper}>
          <label htmlFor="form-input">Your story</label>
          <textarea id="form-input" className={style.textInput} rows={20} />
        </div>
        <div className={style.formFooter}>
          <Input label="Email" id="form-email" />
          <Button type="submit">submit</Button>
        </div>
      </form>
    </>
  );
};

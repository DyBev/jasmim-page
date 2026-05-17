import styles from "./Input.module.scss";

type InputProps = {
  label: string,
  id: string,
};

export default function Input({ label, id }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={styles.input} />
    </div>
  );
}


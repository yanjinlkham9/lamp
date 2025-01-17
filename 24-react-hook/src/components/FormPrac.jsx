import { useForm } from "react-hook-form";

export default function FormPrac() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const nameRegister = register("name");
  const onValid = (data) => {
    console.log("유효한 데이터", data);
  };
  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: "이름은 필수 항목입니다." })}
      />
      {errors.name?.message}
      <br />
      <input
        type="number"
        placeholder="age"
        {...register("age", {
          validate: {
            useAge: (value) => {
              return value >= 0 || "0 이상의 숫자만 입력 가능합니다";
            },
          },
        })}
      />
      {errors.age?.message}
      <button>제출</button>
    </form>
  );
}

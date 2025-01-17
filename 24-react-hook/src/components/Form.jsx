import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register, //input의 변경 감지
    handleSubmit, //form의 submit event 발생 시 호출
    watch, //특정 필드의 값을 실시간으로 관찰
    formState: { errors },
  } = useForm();

  //단축 평가
  //   console.log("단축평가 || 논리합", true || "hello"); //true
  //   console.log("단축평가 || 논리합", false || "hello"); //"hello"
  //   console.log("단축평가 && 논리곱", true && "hi"); // "hi"
  //   console.log("단축평가 && 논리곱", false && "hi"); //false

  const userNameRegister = register("username");
  //   console.log(userNameRegister); //register의 반환값은 객체

  console.log("errors", errors);
  const onValid = (data) => {
    console.log("유효한 데이터", data);
    //{email, username, password}

    //axios 요청
  };
  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
    //form내부에 작성한 유효성 검사가 실패했을 때의 코드 작성
  };

  //확인용:watch()
  console.log("watch: ", watch());
  console.log("watch username: ", watch("username"));
  return (
    /*
    handleSubmit(func1[, func2]): 인자로 함수를 2개 받음 (func2 not 필수)
    - 자동으로 새로고침 방지
    - func1: 필수! 유효성검증이 모두 만족했을 때, 실제 제출할 때 실행
    = func2: 선택, 유효하지 않을 때 실행될 함수
    */
    <form
      style={{ border: "1px solid black" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          //required 시켜지지 않았다면 errors 객체로 메세지 전달됨
          //errors.username.message
          required: "이름을 입력해주세요",
          minLength: {
            message: "이름은 2글자 이상으로 입력해주세요.",
            value: 2, //minlength가 지켜지지 않을 때 message나옴
          },
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="email"
        placeholder="email(gmail)"
        {...register("email", {
          required: "이메일을 입력해주세여",
          validate: {
            useGmail: (value) => {
              //인자로 들어오는 value는 input.value
              return (
                //앞의 연산이 true라면 true
                //앞의 연산이 false라면 뒤의 string 리턴
                value.includes("gmail.com") || "gmail로만 가입 가능합니다."
              );
            },
          },
        })}
      />
      {errors.email?.message}
      <br />
      <input type="password" placeholder="password" {...register("password")} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

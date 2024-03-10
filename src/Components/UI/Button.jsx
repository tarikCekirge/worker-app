import tw from "tailwind-styled-components";

const Button = (props) => {
  const Button = tw.button`
    text-center text-white py-2 px-4 bg-slate-500 w-full rounded-md mt-4 font-bold
    `;
  return (
    <Button type={props.type} className={props.className}>
      {props.children}
    </Button>
  );
};

export default Button;

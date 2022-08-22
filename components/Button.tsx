import clsx from "clsx";

interface ButtonProps {
  children: string;
  outline?: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { children, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

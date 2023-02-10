interface IconProps {
  size?: number | string
}
export const DownLineIcon = (props: IconProps) => {
  const size = props.size
    ? typeof props.size === 'number'
      ? `${props.size}px`
      : props.size
    : undefined

  return (
    <svg
      t="1675967913337"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5502"
      width={size}
      height={size}
    >
      <path
        d="M783.573333 368.426667a42.666667 42.666667 0 0 0-60.373333 0l-211.2 211.2-211.2-211.2a42.666667 42.666667 0 0 0-60.373333 60.373333l240.853333 240.853333a42.666667 42.666667 0 0 0 60.586667 0L783.573333 428.8a42.666667 42.666667 0 0 0 0-60.373333z"
        p-id="5503"
      ></path>
    </svg>
  )
}

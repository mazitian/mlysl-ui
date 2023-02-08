interface IconProps {
  size?: number | string
}
export const CloseIcon = (props: IconProps) => {
  const size = props.size
    ? typeof props.size === 'number'
      ? `${props.size}px`
      : props.size
    : undefined

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" />
    </svg>
  )
}

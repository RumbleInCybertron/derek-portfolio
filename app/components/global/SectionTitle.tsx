type SectionTitleProps = {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div>
      <h2>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle;
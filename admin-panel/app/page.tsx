// app/page.tsx
import FilterGroup from "@/components/FilterGroup"
import ContentBox from "@/components/ContentBox"

export default function HomePage() {
  return (
    <section className="content">
      <FilterGroup />
      <ContentBox />
    </section>
  )
}
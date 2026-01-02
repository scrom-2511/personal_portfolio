import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerDemo() {
  return (
    <div className="flex w-full h-full flex-col gap-4 items-center justify-center">
      <Item variant="default">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Loading Project Details...</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  )
}

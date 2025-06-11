import type { ReactElement } from 'react'
import { AspectRatio, Image } from '@mantine/core'

type RecipeImageProps = {
  imageUrl: string | null
  title: string
}

export const RecipeImage = ({
  imageUrl,
  title,
}: RecipeImageProps): ReactElement => (
  <AspectRatio ratio={1} w="100%" h="100%">
    <Image
      radius="md"
      src={imageUrl}
      fallbackSrc="https://placehold.co/600x600?text=Placeholder"
      alt={title}
    />
  </AspectRatio>
)

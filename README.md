# APP MODELS

### PRODUCT MODEL (Reference: https://www.istoreil.co.il/iPhone/apple-iphone-15)
{
  name: string,
  slug: string,
  description: string,
  productImages: [Image, Image, Image],
  reviews: {
    title: string,
    content: [
      {
        title: string,
        content: string
      }
    ]
  },
  box: {
    title: string,
    subTitle: string
  },
  specifications: [
    {
      title: string, // eg. "iPhone 15"
      specs: [
        {
          title: string, // eg. "screen" || "length"
           spec: string
        }
      ]
    }
  ],
  video: URL,
  responsibility: [
    {
      title: string,
      content: string
    }
  ]
  attributes: {
    colors: {
      title: string,
      data: [
        {
          title: string, 
          color: string 
        }
      ]
    },
    model: {
      title: string, 
      data: string[],
    },
    volume: {
      title: string,
      data: string[]
    }
  },
}
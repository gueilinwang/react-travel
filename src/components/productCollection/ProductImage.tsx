import React from 'react'
import { Image, Typography } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface IProductImageProps extends RouteComponentProps {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: number | string
  title: string
}

const ProductImageComponent: React.FC<IProductImageProps> = ({
  id,
  size,
  imageSrc,
  price,
  title,
  history,
  location,
  match,
}) => {
  return (
    <div onClick={() => history.push(`detail/${id}`)}>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          NTD {price} 起
        </Typography.Text>
      </div>
    </div>
  )
}
const ProductImage = withRouter(ProductImageComponent)
export default ProductImage

import React from 'react'
import { ShimmerThumbnail,ShimmerContentBlock,ShimmerPostList,ShimmerText} from "react-shimmer-effects";


const ShimmerHeader = () => {
  return (
    <div>
        <ShimmerThumbnail height={450} center={true} rounded className="m-3" />
        <ShimmerText line={4} gap={10} className="m-3"/>;
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={1} gap={30} className="m-3"/>

        <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} className="m-3"/>
        <ShimmerContentBlock title text cta reverse thumbnailWidth={370} thumbnailHeight={370}className="m-3"/>
        <ShimmerText line={5} gap={10} />;
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={1} gap={30} />

        <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370}/>
        <ShimmerContentBlock title text cta reverse thumbnailWidth={370} thumbnailHeight={370}/>



        

    </div>
  )
}

export default ShimmerHeader
import React, { memo} from 'react'
import TitleList from '@/components/titleList'
export default memo(function Stars() {

    return (
        <TitleList title="收藏" starPage="true" ></TitleList>
    )
})


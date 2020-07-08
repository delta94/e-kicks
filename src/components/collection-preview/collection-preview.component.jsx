import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <span className='title'>{title}</span>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;
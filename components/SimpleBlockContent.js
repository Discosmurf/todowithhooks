import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import client from '../store/static/client';

const {projectId, dataset} = client.config()

const serializers = {
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

function SimpleBlockContent (props) {
  const {blocks} = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return <BlockContent blocks={blocks} projectId={projectId} dataset={dataset} serializers={serializers}/>
}

SimpleBlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object)
}

export default SimpleBlockContent

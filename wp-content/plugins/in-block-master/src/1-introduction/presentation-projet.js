const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton, link } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/presentation-projet`

registerBlockType(BLOCK_NAME, {
  title: __('Présentation du Projet'),
  description: __('Présentation du projet'),
  icon: 'text',
  category: 'text',
  attributes: {
    imageUrl: {
      type: 'string'
    },
    imageId: {
      type: 'integer'
    },
    description: {
      type: 'string'
    }
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { imageUrl, imageId, description, }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return(
      <>
        <div className={classNameContainer}>
          <div className={className + '__image'}>
            { imageUrl ? (
                <img src={imageUrl} alt="" />
              ) : (
                <MediaPlaceholder
                  onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id } ) }
                  allowedTypes = { [ 'image' ] }
                  multiple = { false }
                  labels = { { title: 'The Image' } }
                />
              )
            }
          </div>

  
           
           <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Description') }
          className={ description }
          value={description}
          onChange={ (description) => { setAttributes( { description } ) } }
        />

       
        </div>

        <InspectorControls>
          <BaseControl>
            <MediaUpload
              onSelect={ ( media ) => setAttributes( { imageUrl: media.url, imageId: media.id } ) }
              type="image"
              value={imageId}
              className="file"
              render={ ( { open } ) => (
                <Button
                  className={ !imageUrl && 'button button-large' }
                  onClick={ open } >
                    {
                      imageUrl ? (
                        <div className='inspector-controls-flex'>
                          <img className='inspector-controls-flex-img' src={imageUrl} alt="" />
                          <p>{ __('Replace image') }</p>
                        </div>
                      ) : (
                        __('Select image')
                      )
                    }
                </Button>
              ) }
            />
          </BaseControl>
         
       
        </InspectorControls>
      </>
    )
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////
  save: ({ attributes: { imageUrl, imageId, description,  } }) => (

<div className="introduction">
{ imageUrl &&
    <img src={imageUrl} alt="couverture"/>
 }
    <div className="introduction-text">
      <p className="description"> {description} </p>
    </div>
  </div>
  )
})

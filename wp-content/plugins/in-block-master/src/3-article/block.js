const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/block-intro`

registerBlockType(BLOCK_NAME, {
  title: __('Introduction'),
  description: __('Introduction d une page projet'),
  icon: 'media-text',
  category: 'text',
  attributes: {
    imageUrl: {
      type: 'string'
    },
    imageId: {
      type: 'integer'
    },
    titre: {
      type: 'string'
    },
    headline: {
      type: 'string'
    },
    paragraphe: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { imageUrl, imageId, titre, headline, paragraphe, category }, setAttributes, className } = props
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
            placeholder={ __( 'Titre') }
            className={ className }
            value={titre}
            onChange={ titre => setAttributes( { titre } ) }
          />
           <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Headline') }
          className={ headline }
          value={headline}
          onChange={ (headline) => { setAttributes( { headline } ) } }
        />
        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Paragraphe') }
          className={ paragraphe }
          value={paragraphe}
          onChange={ (paragraphe) => { setAttributes( { paragraphe } ) } }
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
         
          { <SelectControl
      label="category"
      value={ category }
      options={ [
        {label: 'Selectionnez', value:''},
        {label: 'BoostWellness', value:'beige'},
        { label: 'DailyArt', value: 'cyan' },
        { label: 'Bug', value: 'vertgazon' },
        { label: 'Unicrime', value: 'noir' },
        { label: 'Le couloir', value: 'marron' },
        { label: 'Oiseau Bleu', value: 'marine' },
        { label: 'Ecoville', value: 'verttendre' },
        { label: 'Plum', value: 'violet' },

      ] }
   onChange={ ( category ) => props.setAttributes( { category: category } ) }
      /> }

        </InspectorControls>
      </>
    )
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////
  save: ({ attributes: { imageUrl, imageId, titre, headline, paragraphe,category } }) => (

<div>
<div class="bloc-intro">
  <div className="left">
    <h2 className={`title ${category}` }> {titre} </h2>
    <h3 className={`headline ${category}-2`}> {headline} </h3>
    <p>{paragraphe}</p>
</div>
<div className="right ">
{ imageUrl &&
    <img class="img_left " src={imageUrl} alt=""/>
 }
 </div>
 </div>
  </div>
  )
})

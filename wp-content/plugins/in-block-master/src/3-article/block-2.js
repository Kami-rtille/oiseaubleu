const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/block-suite`

registerBlockType(BLOCK_NAME, {
  title: __('Paragraphe'),
  description: __('Ajout de paragraphe headline/para'),
  icon: 'media-text',
  category: 'text',
  attributes: {
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
    const { attributes: { headline, paragraphe, category }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return(
      <>
        <div className={classNameContainer}>
         
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
  save: ({ attributes: { headline, paragraphe,category } }) => (

<div>
<div class="bloc-intro">
  <div className="left">
    <h3 className={`headline ${category}-2`}> {headline} </h3>
    <p>{paragraphe}</p>
</div>
</div>
  </div>
  )
})

const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/block-suite2`

registerBlockType(BLOCK_NAME, {
  title: __('Liste'),
  description: __('Ajout de liste'),
  icon: 'media-text',
  category: 'text',
  attributes: {
    headline: {
      type: 'string'
    },
    puce1: {
      type: 'string'
    },
    puce2: {
      type: 'string'
    },
    puce3: {
      type: 'string'
    },
    puce4: {
      type: 'string'
    },
    puce5: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { headline, puce1, puce2, puce3, puce4, puce5, category }, setAttributes, className } = props
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
          placeholder={ __( 'Puce1') }
          className={ puce1 }
          value={puce1}
          onChange={ (puce1) => { setAttributes( { puce1 } ) } }
        />
         <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Puce2') }
          className={ puce2 }
          value={puce2}
          onChange={ (puce2) => { setAttributes( { puce2 } ) } }
        />
         <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Puce3') }
          className={ puce3 }
          value={puce3}
          onChange={ (puce3) => { setAttributes( { puce3 } ) } }
        />
         <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Puce4') }
          className={ puce4 }
          value={puce4}
          onChange={ (puce4) => { setAttributes( { puce4 } ) } }
        />
        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Puce5') }
          className={ puce5 }
          value={puce5}
          onChange={ (puce5) => { setAttributes( { puce5 } ) } }
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
  save: ({ attributes: { headline, puce1, puce2, puce3, puce4, puce5,category, } }) => (

<div>
<div class="bloc-intro">
  <div className="left">
    <h3 className={`headline ${category}-2`}> {headline} </h3>
    <ul>
      <li>{puce1}</li>
      <li>{puce2}</li>
      <li>{puce3}</li>
      <li>{puce4}</li>
      <li>{puce5}</li>
    </ul>
</div>
</div>
  </div>
  )
})

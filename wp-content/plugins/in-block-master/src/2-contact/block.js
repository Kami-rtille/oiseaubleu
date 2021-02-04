const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/contact`

registerBlockType(BLOCK_NAME, {
  title: __('Contact'),
  description: __('Conactez-moi'),
  icon: 'media-text',
  category: 'text',
  attributes: {

    titre: {
      type: 'string'
    },
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
    lien1: {
      type: 'string'
    },
    lien2: {
      type: 'string'
    },
    lien3: {
      type: 'string'
    },
    lien4: {
      type: 'string'
    },
    lien5: {
      type: 'string'
    },
    
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { titre, headline, puce1, puce2, puce3, puce4, puce5, lien1, lien2, lien3, lien4, lien5, }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return(
      <>
       

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
          placeholder={ __( 'Puce1') }
          className={ puce1 }
          value={puce1}
          onChange={ (puce1) => { setAttributes( { puce1 } ) } }
        />
         <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Lien1') }
          className={ lien1 }
          value={lien1}
          onChange={ (lien1) => { setAttributes( { lien1 } ) } }
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
          placeholder={ __( 'Lien2') }
          className={ lien2 }
          value={lien2}
          onChange={ (lien2) => { setAttributes( { lien2 } ) } }
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
          placeholder={ __( 'Lien3') }
          className={ lien3 }
          value={lien3}
          onChange={ (lien3) => { setAttributes( { lien3 } ) } }
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
          placeholder={ __( 'Lien4') }
          className={ lien4 }
          value={lien4}
          onChange={ (lien4) => { setAttributes( { lien4 } ) } }
        /> 


        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Puce5') }
          className={ puce5 }
          value={puce5}
          onChange={ (puce5) => { setAttributes( { puce5 } ) } }
        />  
     
        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Lien5') }
          className={ lien5 }
          value={lien5}
          onChange={ (lien5) => { setAttributes( { lien5 } ) } }
        /> 


      </>
    )
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////
  save: ({ attributes: { titre, headline, puce1, lien1,  puce2, lien2,  puce3, lien3,  puce4, lien4,  puce5, lien5,  } }) => (

<div>
<div class="page-intro">

    <h2 className="title">{titre} </h2>
    <h3 className="headline"> {headline} </h3>
    <ul>
      <li>{puce1}</li>
      <li><a href={lien2}>{puce2}</a></li>
      <li><a href={lien3}>{puce3}</a></li>
      <li><a href={lien4}>{puce4}</a></li>
      <li><a href={lien5}>{puce5}</a></li>
    </ul>
</div>

 </div>
  )
})

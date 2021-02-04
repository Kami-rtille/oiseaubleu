const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/404`

registerBlockType(BLOCK_NAME, {
  title: __('Page 404'),
  description: __('Personnalisation page 404 '),
  icon: 'media-text',
  category: 'text',
  attributes: {

    titre: {
      type: 'string'
    },
    headline: {
      type: 'string'
    },
    paragraphe: {
      type: 'string'
    },
   
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { titre, headline, paragraphe,  }, setAttributes, className } = props
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
          placeholder={ __( 'Paragraphe') }
          className={ paragraphe }
          value={paragraphe}
          onChange={ (paragraphe) => { setAttributes( { paragraphe } ) } }
        />
      </>
    )
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////
  save: ({ attributes: {  titre, headline, paragraphe, } }) => (

<div>
<div class="page-intro">
    <h2 className="title"> {titre} </h2>
    <h3 className="headline"> {headline} </h3>
    <p>{paragraphe}</p>
    <a className="btn-link" href="home">Retour à l'accueil</a>
 </div>
  </div>
  )
})

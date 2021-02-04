const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/block-fin`

registerBlockType(BLOCK_NAME, {
  title: __('Button site'),
  description: __('Ajout de lien site'),
  icon: 'media-text',
  category: 'text',
  attributes: {
    nom: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { nom, link,}, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return(
      <>
        <div className={classNameContainer}>
         
           <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Nom') }
          className={ nom }
          value={nom}
          onChange={ (nom) => { setAttributes( { nom } ) } }
        />
        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Lien') }
          className={ link }
          value={link}
          onChange={ (link) => { setAttributes( { link } ) } }
        />
         
        </div>

  
      </>
    )
  },
/////////////////////////////////////////////////////////////////////////////////////////////////////
  save: ({ attributes: { nom, link, } }) => (

<div>
<div class="bloc-intro">
  <div className="left">
    <div className="max">
    <a className="btn-link" href={link}>{nom}</a>
</div>
</div>
</div>
  </div>
  )
})

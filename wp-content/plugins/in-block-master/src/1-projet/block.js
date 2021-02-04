const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks, PlainText, URLInputButton, link } = wp.blockEditor
const { Button, BaseControl, SelectControl } = wp.components

//import { SelectControl } from '@wordpress/components';
import { PLUGIN_NAME } from '../constants';

const BLOCK_NAME = `${PLUGIN_NAME}/projet`

registerBlockType(BLOCK_NAME, {
  title: __('Projet'),
  description: __('Présentation bref du projet'),
  icon: 'text',
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
    description: {
      type: 'string'
    },
    chiffre: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    link: {
      type: 'string'
    }
  },
////////////////  /////////////////////////////////////////////////////////////////////////////////////
  edit: props => {
    const { attributes: { imageUrl, imageId, titre, description, chiffre, link, category}, setAttributes, className } = props
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
          placeholder={ __( 'Chiffre') }
          className={ chiffre }
          value={chiffre}
          onChange={ (chiffre) => { setAttributes( { chiffre } ) } }
        />

          <PlainText
            keepPlaceholderOnFocus="true"
            placeholder={ __( 'Titre') }
            className={ className }
            value={titre}
            onChange={ titre => setAttributes( { titre } ) }
          />
           
           <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Description') }
          className={ description }
          value={description}
          onChange={ (description) => { setAttributes( { description } ) } }
        />

          <URLInputButton
          className={('link') }
          url={ link }
          onChange={ link => setAttributes( { link } ) }
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
  save: ({ attributes: { imageUrl, imageId, titre, description, chiffre, link, category } }) => (

<div className="projet">
<a href={link}>
<div className="block_image">
{ imageUrl &&
    <img src={imageUrl} alt=""/>
 }
  </div>
    <div className={`block_color ${category}`}>
      <div class="circle">
    <h3 className="chiffre"> {chiffre} </h3>
    </div>
    <h1 className="title"> {titre} </h1>
    <p className="description"> {description} </p>
    </div>
    </a>

    </div>
  )
})

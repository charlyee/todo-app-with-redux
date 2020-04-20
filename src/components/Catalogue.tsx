import React from 'react';
import { RootState } from '../store';
import { removeItemFromCatalogue, addItemToCatalogue } from '../store/catalogue/action';
import { Item } from '../store/catalogue/types';
import { Grid, Form, Input, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ICatalogueProps {
  removeItemFromCatalogue: typeof removeItemFromCatalogue,
  addItemToCatalogue: typeof addItemToCatalogue,
  items: Item[]
}

export class Catalogue extends React.Component<ICatalogueProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newProduct = ( event: any ) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const formField: HTMLInputElement | null = document.querySelector( '[name="product-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    // Add new item to catalogue.
    this.props.addItemToCatalogue( {
      id: this.generateID(),
      name: formFieldValue
    } );
  }
  deleteProduct = ( id: number ) => {
    // Remove this product by the ID!
    this.props.removeItemFromCatalogue( id );
  }

  // validate = {} => {

  // }
  render ()
  {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.newProduct}>
            <Form.Field>
              <label htmlFor="product-name">Task Name/Title:</label>
              <Input 
                name="product-name" 
                placeholder='Enter task here...'
              />
              
            </Form.Field>
            <Input type="submit" value="Submit" />
          </Form>
        </Grid.Row>
        <h3>Tasks</h3>
        <ul>
          {/* Loop through our REDUX product items... */}
          { this.props.items.map( element => (
              <li>
                {element.name}
                <Label
                  size='mini'
                  color='olive'
                  onClick={event => {
                    this.deleteProduct( element.id )
                }}>
                  &times;
                </Label>
              </li>
          ) ) }
        </ul>
      </Grid>
    );
  }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.catalogue.items
  }
}

// Connect Redux and React using our values and "view!"
export default connect(
  mapStateToProps,
  { addItemToCatalogue, removeItemFromCatalogue }
)( Catalogue );

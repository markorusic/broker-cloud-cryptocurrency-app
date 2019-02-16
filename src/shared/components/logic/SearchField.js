import React, { Component, Fragment } from 'react'
import { TextFieldIcon } from 'src/shared/components/ui'

export class SearchField extends Component {
  state = {
    searchText: ''
  }

  onChangeText = searchText => this.setState({ searchText })

  filteredItems = () => {
    const { items, searchBy, enabled } = this.props
    const { searchText } = this.state
    if (!enabled || !searchText) {
      return items
    }
    return items.filter(
      item =>
        item[searchBy] &&
        item[searchBy].toLowerCase().includes(searchText.toLowerCase())
    )
  }

  render() {
    const { items, searchBy, enabled, children, ...props } = this.props
    return (
      <Fragment>
        {enabled && (
          <TextFieldIcon {...props} onChangeText={this.onChangeText} />
        )}
        {children(this.filteredItems())}
      </Fragment>
    )
  }
}

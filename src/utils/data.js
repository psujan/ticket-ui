const confirmOptions = {
  message: 'Are you sure you want to delete this item?',
  size: 'small',
  maxWidth: '380px',
}

const actions = {
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
}

const ticketStatusOptions = [
  { label: 'New', value: 'New' },
  { label: 'InProgess', value: 'InProgress' },
  { label: 'Reopened', value: 'Reopened' },
  { label: 'Resolved', value: 'Resolved' },
  { label: 'Terminated', value: 'Terminated' },
]

export { confirmOptions, actions, ticketStatusOptions }

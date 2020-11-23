import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function () {
  const [source, setSource] = useState(null)
  const intl = useIntl()

  const loadData = async () => {
    const data = await fetch(
      '/api/users'
    )
    console.log(data)
    const text = await data.text()
    setSource(text)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'about', defaultMessage: 'About' })}
    >
      <Scrollbar>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          {source && (
            <ReactMarkdown
              className="markdown-body"
              source={source}
              escapeHtml
            />
          )}
        </div>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { source && (JSON.parse(source).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
              </TableRow>
            ))) }
          </TableBody>
      </Table>
      </Scrollbar>
    </Page>
  )
}

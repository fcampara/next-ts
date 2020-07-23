/* eslint-disable new-cap */
/* eslint-disable no-undef */
/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { useRef, useEffect, useState } from 'react'

export default function AutocompleteAddress() {
  const autoCompleteRef = useRef(null)
  let autoComplete = useState<google.maps.places.Autocomplete>()
  useEffect(() => {
    // @ts-ignore
    autoComplete =
      autoCompleteRef.current &&
      // @ts-ignore
      new google.maps.places.Autocomplete(autoCompleteRef.current)
    console.log(autoComplete)
  }, [autoCompleteRef])
  return (
    <>
      <input ref={autoCompleteRef} />
    </>
  )
}

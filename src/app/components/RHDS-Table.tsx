'use client';

export const RHDSTable = () => {
  return (
    // @ts-expect-error - RHDS custom element
    <rh-table>
      <table>
        <caption>
          Concerts
        </caption>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th id="concerts-date" scope="col">Date</th>
            {/* @ts-expect-error - RHDS custom element */}
            <th id="concerts-event" scope="col">Event<rh-sort-button></rh-sort-button></th>
            {/* @ts-expect-error - RHDS custom element */}
            <th id="concerts-venue" scope="col">Venue<rh-sort-button></rh-sort-button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="concerts-date">12 February</td>
            <td headers="concerts-event">Waltz with Strauss</td>
            <td headers="concerts-venue">Main Hall</td>
          </tr>
          <tr>
            <td headers="concerts-date">24 March</td>
            <td headers="concerts-event">The Obelisks</td>
            <td headers="concerts-venue">West Wing</td>
          </tr>
          <tr>
            <td headers="concerts-date" data-label="Custom heading 1">14 April</td>
            <td headers="concerts-event" data-label="Custom heading 2">The What</td>
            <td headers="concerts-venue" data-label="Custom heading 3">Main Hall</td>
          </tr>
        </tbody>
      </table>
      <small slot="summary">Dates and venues subject to change.</small>
    {/* @ts-expect-error - RHDS custom element */}
    </rh-table>
  );
};
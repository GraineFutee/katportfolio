import React, { useState } from "react";

import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import DropDownArea from "./DropDownArea";

export default function Areas() {
  const [visibleArea, setVisibleArea] = useState("");

  return (
    <>
      <SectionHeader title="Practice areas" id="areas" />
      <SectionBody bg="/areas/2.jpg">
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column">
            <DropDownArea
              title="Company law"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Incorporation and registration, corporate governance including
                Board matters, as well as restructuring, new share issuing,
                constructing and negotiating Shareholders Agreements.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Contract law"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Producing and negotiation of contracts, reviewing and assessing
                contract suggestions.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Commercial law"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Structuring and overseeing transactions between businesses,
                including matters such as advertising and marketing,
                collections, banking, contracts, negotiable instruments, and
                trade in general.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Governance"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Board work, strategic matters, work shops and education, policy
                documents and implementation of such.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Investments"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Structuring and overseeing investment rounds, facilitating and
                leading investments and managing deal flow and evaluations of
                investment memorandums.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Incentive programs"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Management incentive programs, short- and long term, including
                Stock options, Employee stock options and sweat equity deals.
                Structuring of KPI:s also in relation to regulated operations
                within Financial Services.
              </p>
            </DropDownArea>
            <DropDownArea
              title="Financial & Regulatory"
              setVisibleArea={setVisibleArea}
              visibleArea={visibleArea}
            >
              <p className="has-text-left" style={{ zIndex: 3 }}>
                Regulatory and governance issues related to UCITS and AIFMD
                regulated operations, also in relation to AML regulation and
                general correspondence and reporting in relation to the Swedish
                Financial Authorities and ESMA.
              </p>
            </DropDownArea>
          </div>
          <div className="column is-3"></div>
        </div>
      </SectionBody>
    </>
  );
}

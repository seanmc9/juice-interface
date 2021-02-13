import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { colors } from '../../constants/styles/colors'
import Footer from '../../components/Footer'
import ImgTextSection from './ImgTextSection'

export default function Landing({
  userAddress,
  onNeedAddress,
}: {
  userAddress?: string
  onNeedAddress: VoidFunction
}) {
  const bulletSize = 8

  const totalMaxWidth = 1080

  const bullet = (text: string) => (
    <li
      style={{
        display: 'flex',
        alignItems: 'baseline',
        lineHeight: 1.2,
        marginBottom: 10,
        fontWeight: 500,
      }}
    >
      <span
        style={{
          display: 'inline-block',
          minWidth: bulletSize,
          width: bulletSize,
          height: bulletSize,
          borderRadius: '50%',
          background: colors.juiceOrange,
          marginRight: 12,
        }}
      ></span>
      {text}
    </li>
  )

  const bigHeader = (text: string) => (
    <h1 style={{ fontSize: '2.8rem', fontWeight: 600, lineHeight: 1.1 }}>
      {text}
    </h1>
  )

  return (
    <div>
      <section>
        <div
          style={{
            maxWidth: totalMaxWidth,
            padding: 40,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              alignItems: 'center',
              columnGap: 60,
            }}
          >
            <div style={{ display: 'grid', rowGap: 10 }}>
              {bigHeader('Taste the fruits of your labor')}
              <p>
                An Ethereum business model and stakeholder structure for:
              </p>
              <div>
                {bullet('Open source stuff')}
                {bullet('Indy projects')}
                {bullet('Public goods')}
                {bullet('DAOs')}
                {bullet('Any project with predictable expenses')}
              </div>
              <p>
                1. Make a budget saying how much money you want/need 
                in order to absolutely crush your mission statement.
              </p>
              <p>
                2. People pay you just like they would on Patreon, 
                or transparently from within your Solidity smart contracts. #BusinessModelAsAService #DeWork
              </p>
              <p>
                3. If your budget overflows, your paying customers can claim the glorious surplus, effectively pushing prices down as you grow. #RegenFinance
              </p>
              <p>
                4. Your budgets are recurring. You can make changes as your project evolves, with the approval of those paying customers that have not yet claimed their fair share of the overflowed surplus.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  columnGap: 10,
                }}
              >
                {userAddress ? (
                  <Link to={userAddress}>
                    <Button type="primary">Create a project</Button>
                  </Link>
                ) : (
                  <Button onClick={onNeedAddress} type="primary">
                    Create a project
                  </Button>
                )}
              </div>
            </div>
            <img
              style={{
                maxWidth: totalMaxWidth / 2,
                height: '75vh',
                maxHeight: 800,
                minHeight: 440,
              }}
              src="/assets/orange_lady.png"
              alt="GET JUICED"
            />
          </div>
        </div>
      </section>

      {/* <section
        style={{
          padding: 80,
          background: colors.juiceOrange,
          overflow: 'hidden',
        }}
      >
        <ExampleCard
          title="Yearn Finance"
          duration={30}
          timeLeft={6}
          target={30000}
          earned={36666}
          want="DAI"
          tokenName="YFI"
        />
        <ExampleCard
          title="Juice"
          duration={30}
          timeLeft={7}
          target={12000}
          earned={12888}
          want="DAI"
          tokenName="JUICE"
        />
        <ExampleCard
          title="Gitcoin"
          duration={30}
          timeLeft={1}
          target={18000}
          earned={19337}
          want="DAI"
          tokenName="WETH"
          ticketName="GITCOIN"
        />
      </section> */}

      <section>
        <div style={{ padding: 80, maxWidth: totalMaxWidth, margin: '0 auto' }}>
          <ImgTextSection
            img=""
            imgPosition="left"
            title="Old business models don’t work on the open internet"
            text={[
              'Users are now in charge, and they expect transparency, algorithmic assurances, public governance, and excellent memes out of the protocols and communities they depend on.',
              'Though the power and the risk are shifting away from institutions and into the hands of individuals, the integrity of this regenerative economy still depends on buidlers, workers, creators, innovators, and maintainers. We’re out here self-organizing to make sure your bags stay SAFU and have a chance to grow.'
            ]}
          />
          <ImgTextSection
            img=""
            imgPosition="right"
            title="Ethereum and DeFi give us something fresh"
            text={[
              'Until now, there hasn’t been an organic way to provide consistent cashflow to core teams and casual contributors of protocols, many of whom start out young and broke and unable to buy bags. We’ve been patching this need with legacy ideas like golden handcuffs, philanthropic ideas like grants, and controversial ideas like minting token supply for dev treasuries.',
              'The internet of work, DeWork, needs a juicier solution – one that extends the best parts of DeFi, one that promotes cooperation, flexibility, and immediacy.',
              'Juice is that solution.',
            ]}
          />
        </div>
      </section>

      {/* <section style={{ textAlign: 'center', padding: 80 }}>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {bigHeader('The goal is to overflow')}
          <p>
            Each end user or smart contract that sends you funds will recieve
            your project’s Tickets (ERC-20) in return. These Tickets can be
            redeemed for a proportional amount of the overflow you’ve built up
            over time from each Budget.
          </p>
          <p>
            With each Budget, fewer Tickets are distributed per unit of funds
            contributed.
          </p>
        </div>
        <img
          style={{ maxHeight: 540 }}
          src="/assets/glass_overflow.png"
          alt="Overflowing glass"
        />
      </section> */}

      <section style={{ padding: 80, background: colors.light }}>
        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            maxWidth: totalMaxWidth,
            columnGap: 60,
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <img
            style={{ maxWidth: 440 }}
            src="/assets/banana_dwgj.png"
            alt="Banana chilling and saying 'DO WORK GET JUICED'"
          />
          <div>
            {bigHeader('Why choose Juice?')}
            <p>
              Juice gives projects a reason to be measured and open with
              their intent, and gives those who get value out of the project
              a cultured way to pay for it.
            </p>
            <p>
              People end up getting community-driven goods and services 
              with no ads, data integrity, full business operation
              accountability, and an open source code base. All built by
              motivated punks getting paid what they ask for, and with a price
              tag that effectively tends toward zero as the juice flow grows.
            </p>
            <p>
              Use Juice as your business-model-as-a-service by composing your
              contract with it. Just inherit from JuiceAdmin and route your app's transaction fees through it, or something.
            </p>
            {userAddress ? (
              <Link to={userAddress}>
                <Button type="primary">Build with Juice</Button>
              </Link>
            ) : (
              <Button onClick={onNeedAddress} type="primary">
                Build with Juice
              </Button>
            )}
          </div>
        </div>
      </section>

      <div
        style={{
          background: 'black',
          padding: 40,
          paddingTop: 60,
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: colors.juiceOrange, margin: 0 }}>
          Big ups to the Ethereum and DeFi community for crafting the
          infrastructure and economy to make Juice possible.
        </h3>
      </div>
      <Footer />
    </div>
  )
}
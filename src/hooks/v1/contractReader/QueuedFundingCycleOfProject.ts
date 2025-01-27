import { BigNumber, BigNumberish } from 'ethers'
import { V1ContractName } from 'models/v1/contracts'
import { FundingCycle } from 'models/funding-cycle'

import useContractReader from './ContractReader'

/** Returns queued funding cycle for project. */
export default function useQueuedFundingCycleOfProject(
  projectId: BigNumberish | undefined,
) {
  return useContractReader<FundingCycle>({
    contract: V1ContractName.FundingCycles,
    functionName: 'queuedOf',
    args: projectId ? [BigNumber.from(projectId).toHexString()] : null,
    updateOn: projectId
      ? [
          {
            contract: V1ContractName.FundingCycles,
            eventName: 'Configure',
            topics: [[], BigNumber.from(projectId).toHexString()],
          },
        ]
      : undefined,
  })
}

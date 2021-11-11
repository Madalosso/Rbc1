import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  RubiconMarket,
  LogKill,
  LogMake,
  LogTake,
} from "../generated/RubiconMarket/RubiconMarket";
import {
  LogKill as LogKillEntity,
  LogMake as LogMakeEntity,
  LogTake as LogTakeEntity,
} from "../generated/schema";

export function handleLogKill(event: LogKill): void {
  let ep = event.params,
    lkID = ep.id.toHexString(),
    // Create new LogKill entity
    logKill = new LogKillEntity(lkID);

  logKill.id = lkID;
  logKill.pair = ep.pair;
  logKill.maker = ep.maker;
  logKill.pay_gem = ep.pay_gem;
  logKill.buy_gem = ep.buy_gem;
  logKill.pay_amt = ep.pay_amt;
  logKill.buy_amt = ep.buy_amt;
  logKill.timestamp = ep.timestamp;
  logKill.transactionHash = ep._event.transaction.hash;

  logKill.save();
}

export function handleLogMake(event: LogMake): void {
  // For `LogMake` entity.
  let ep = event.params,
    lmID = ep.id.toHexString(),
    // Create new LogMake entity.
    logMake = new LogMakeEntity(lmID);

  logMake.id = lmID;
  logMake.pair = ep.pair;
  logMake.maker = ep.maker;
  logMake.pay_gem = ep.pay_gem;
  logMake.buy_gem = ep.buy_gem;
  logMake.pay_amt = ep.pay_amt;
  logMake.buy_amt = ep.buy_amt;
  logMake.timestamp = ep.timestamp;
  logMake.transactionHash = ep._event.transaction.hash;

  logMake.save();
}

export function handleLogTake(event: LogTake): void {
  let ep = event.params,
    ltID = ep.id.toHexString(),
    // Create new LogTake entity
    logTake = new LogTakeEntity(ltID);

  logTake.id = ltID;
  logTake.pair = ep.pair;
  logTake.maker = ep.maker;
  logTake.taker = ep.taker;
  logTake.pay_gem = ep.pay_gem;
  logTake.buy_gem = ep.buy_gem;
  logTake.take_amt = ep.take_amt;
  logTake.give_amt = ep.give_amt;
  logTake.timestamp = ep.timestamp;
  logTake.transactionHash = ep._event.transaction.hash;

  logTake.save();
}

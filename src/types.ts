import {
	OrderSide,
	OrderType,
	TimeInForce,
	Market
} from '@dydxprotocol/v3-client';
import { PositionSide } from '@perp/sdk-curie';

export type AlertObject = {
	exchange: string;
	strategy: string;
	market: string;
	size?: number;
	sizeUsd?: number;
	order: string;
	price: number;
	trailingPercent: number;
	position: string;
	reverse: boolean;
	passphrase?: string;
};

export type dydxOrderParams = {
	market: Market;
	side: OrderSide;
	type: OrderType.MARKET;
	timeInForce: TimeInForce.FOK;
	postOnly: false;
	trailingPercent: number;
	size: string;
	price: string;
	limitFee: string;
	expiration: string;
};

export type perpOrderParams = {
	tickerSymbol: string;
	side: PositionSide;
	amountInput: number;
	isAmountInputBase: boolean;
	referralCode: string;
};

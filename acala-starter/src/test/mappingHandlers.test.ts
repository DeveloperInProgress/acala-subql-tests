import { subqlTest } from "@subql/testing";
import { SubstrateBlock, SubstrateHandlerKind } from "@subql/types";
import { StarterEntity } from "../types";
import { handler } from "../mappings/mappingHandlers";
//const StarterEntity = bundle['StarterEntity'];

subqlTest(
    "handleBlock test - should pass",
    102,
    [],
    [
      StarterEntity.create({
        id: '0x44e94d2e22be8f915c19e18d221260232516c40db63553d8e2d9c5ff63aae9c1', 
        field1: 102,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    'handleBlock',
  );

  subqlTest(
    "handleBlock test - should fail",
    102,
    [],
    [
      StarterEntity.create({
        id: '0x44e94d2e22be8f915c19e18d221260232516c40db63553d8e2d9c5ff63aae9c1', 
        field1: 1020,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    'handleBlock',
  );

  subqlTest(
    "handleEvent test - should pass",
    1000003,
    [
      StarterEntity.create({
        id: '0x0ca3c88eaa25af380f243273e83ba2e161b207d935357af063e2bd5b8a2e9c40', // Replace this with the actual block hash for block 103
        field1: 1000003,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    [
      StarterEntity.create({
        id: '0x0ca3c88eaa25af380f243273e83ba2e161b207d935357af063e2bd5b8a2e9c40', // Replace this with the actual block hash for block 103
        field1: 1000003,
        field2: '23M5ttkmR6KcoTAAE6gcmibnKFtVaTP5yxnY8HF1BmrJ2A1i', 
        field3: BigInt(2303515439), 
        field4: null,
        field5: null,
      }),
    ],
    'handleEvent',
  );

  subqlTest(
    "handleEvent test - should fail",
    1000003,
    [
      StarterEntity.create({
        id: '0x0ca3c88eaa25af380f243273e83ba2e161b207d935357af063e2bd5b8a2e9c40', // Replace this with the actual block hash for block 103
        field1: 1000003,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    [
      StarterEntity.create({
        id: '0x0ca3c88eaa25af380f243273e83ba2e161b207d935357af063e2bd5b8a2e9c40', // Replace this with the actual block hash for block 103
        field1: 1000003,
        field2: '23M5ttkmR6KcoTAAE6gcmibnKFtVaTP5yxnY8HF1BmrJ2A1i', 
        field3: BigInt(241627213), 
        field4: null,
        field5: null,
      }),
    ],
    'handleEvent',
  );

  subqlTest(
    "handleCall test - should pass",
    104,
    [
      StarterEntity.create({
        id: '0xbc6b595264eb9b4a8f410df85321f559329287bcc7cc6c597f8bb9b1a5f817ca', // Replace this with the actual block hash for block 104
        field1: 104,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    [
      StarterEntity.create({
        id: '0xbc6b595264eb9b4a8f410df85321f559329287bcc7cc6c597f8bb9b1a5f817ca', // Replace this with the actual block hash for block 104
        field1: 104,
        field2: null,
        field3: null,
        field4: new Date(1639800114526), // Replace this with the actual timestamp from the extrinsic.block
        field5: true,
      }),
    ],
    'handleCall',
  );

  subqlTest(
    "handleCall test - should fail",
    104,
    [
      StarterEntity.create({
        id: '0xbc6b595264eb9b4a8f410df85321f559329287bcc7cc6c597f8bb9b1a5f817ca', // Replace this with the actual block hash for block 104
        field1: 104,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
      }),
    ],
    [
      StarterEntity.create({
        id: '0xbc6b595264eb9b4a8f410df85321f559329287bcc7cc6c597f8bb9b1a5f817ca', // Replace this with the actual block hash for block 104
        field1: 104,
        field2: null,
        field3: null,
        field4: new Date(163980011452), // Replace this with the actual timestamp from the extrinsic.block
        field5: true,
      }),
    ],
    'handleCall',
  );
import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-yukari-swimsuit",
  slug: "yukari-swimsuit",
  title: "Yukari (Swimsuit)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 11.666666984558105,
    "lines": [
      {
        "id": "ch0301_memoriallobby_1",
        "text": {
          "zh-cn": "",
          "ja": "（先生！身共を探しに\nいらしてくださったの\nですね！）",
          "ko": "(선생님! 바닷물 속에 있는\n소녀를 찾아내어 주셨군요!)",
          "en": "(Sensei! You found me under the sea!)"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 17.83333396911621,
    "lines": [
      {
        "id": "ch0301_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "（いつもは遠くから\n見ていただけの海が……。）",
          "ko": "(언제나 발치에서\n내려다볼 뿐이던 바닷속에,)",
          "en": "(I never expected to see such beautiful scenery...)"
        }
      },
      {
        "id": "ch0301_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "（こんなにも美しい\n光景を秘めていたなんて。）",
          "ko": "(이토록이나 아름다운 풍경이\n숨겨져 있을 줄이야.)",
          "en": "(...hidden under the water that I've only seen from afar.)"
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 21.666667938232422,
    "lines": [
      {
        "id": "ch0301_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "（それを、先生とこうして\n二人で眺めることが\nできるだなんて……。）",
          "ko": "(그리고 그런 장소에서\n선생님과 마주 보며\n함께 하게 될 줄이야.)",
          "en": "(And for me to be together with Sensei at such a place...)"
        }
      },
      {
        "id": "ch0301_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "（ああ、身共はなんて\n幸せ者なのでしょう。）",
          "ko": "(아아, 소녀는 어쩜\n이렇게 행운아일까요?)",
          "en": "(Aah, aren't I such a lucky girl?)"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0301_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "（あれ……先生？\nなんだか顔色が……？）",
          "ko": "(어라, 선생님?\n표정이 뭔가, 어라라……?)",
          "en": "(Um, Sensei? Your face is uh, huh...?)"
        }
      },
      {
        "id": "ch0301_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "（身共、何かおかしな\nことでも？）",
          "ko": "(소녀, 무언가 잘못했사와요?)",
          "en": "(Did I do something wrong?)"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 16.33333396911621,
    "lines": [
      {
        "id": "ch0301_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "（上……？上にはお日様しか\nありませんよ……。）",
          "ko": "(위에? 위에는\n해님 말고 아무것도…….)",
          "en": "(Up? There's nothing up there but the sun...)"
        }
      },
      {
        "id": "ch0301_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "（え……？\nそうじゃない……？）",
          "ko": "(네? 그게 아니어요?)",
          "en": "(What? That's not it?)"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);

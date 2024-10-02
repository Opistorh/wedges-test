import logo from "./logo.svg";
import "./App.css";

import "@radix-ui/themes/styles.css";
import { CopyIcon, BookmarkIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Container,
  Text,
  AlertDialog,
  Card,
  Box,
  Checkbox,
  CheckboxCards,
  DataList,
  Dialog,
  DropdownMenu,
  Radio,
  RadioCards,
  ScrollArea,
  SegmentedControl,
  Select,
  Separator,
  Avatar,
  Badge,
  Code,
  IconButton,
  Link,
  TextField,
  Heading,
  Slider,
  Spinner,
  Switch,
  Table,
  Tabs,
  Theme,
  ThemePanel,
} from "@radix-ui/themes";

import { Alert } from "@lemonsqueezy/wedges";
import { Button } from "@lemonsqueezy/wedges";
import { PlusIcon } from "@iconicicons/react";
import { Loading } from "@lemonsqueezy/wedges";
import {
  CheckCircleIcon,
  CloseCircleIcon,
  CloseIcon,
  SpinnerIcon,
} from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";
import { ProgressCircle } from "@lemonsqueezy/wedges";

function App() {
  return (
    <Theme>
      <Container size="2">
        <ThemePanel />

        <Separator my="4" size="4" />

        <ScrollArea type="always" scrollbars="vertical" style={{ height: 800 }}>
          <Box p="2" pr="8">
            <Heading size="4" mb="2" trim="start">
              Principles of the typographic craft
            </Heading>
            <Flex direction="column" gap="4">
              <Text as="p">
                Three fundamental aspects of typography are legibility,
                readability, and aesthetics. Although in a non-technical sense
                “legible” and “readable” are often used synonymously,
                typographically they are separate but related concepts.
              </Text>
              <Separator my="4" size="4" />
              <Text as="p">
                Legibility describes how easily individual characters can be
                distinguished from one another. It is described by Walter Tracy
                as “the quality of being decipherable and recognisable”. For
                instance, if a “b” and an “h”, or a “3” and an “8”, are
                difficult to distinguish at small sizes, this is a problem of
                legibility.
              </Text>
              <Separator my="4" size="4" />
              <Text as="p">
                Typographers are concerned with legibility insofar as it is
                their job to select the correct font to use. Brush Script is an
                example of a font containing many characters that might be
                difficult to distinguish. The selection of cases influences the
                legibility of typography because using only uppercase letters
                (all-caps) reduces legibility.
              </Text>
              <div className="p-4">
                <div className="mx-auto flex max-w-fit items-start gap-10">
                  <div className="flex flex-col gap-4">
                    <SegmentedControl.Root defaultValue="inbox">
                      <SegmentedControl.Item value="inbox">
                        Inbox
                      </SegmentedControl.Item>
                      <SegmentedControl.Item value="drafts">
                        Drafts
                      </SegmentedControl.Item>
                      <SegmentedControl.Item value="sent">
                        Sent
                      </SegmentedControl.Item>
                    </SegmentedControl.Root>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button before={<PlusIcon />} variant="primary" />
                    <Button before={<PlusIcon />} variant="secondary" />
                    <Button before={<PlusIcon />} variant="tertiary" />
                    <Button before={<PlusIcon />} variant="outline" />
                    <Button before={<PlusIcon />} variant="transparent" />
                    <Button before={<PlusIcon />} variant="link" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button after={<PlusIcon />} before={<PlusIcon />}>
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="secondary"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="tertiary"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="outline"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="transparent"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="link"
                    >
                      Button
                    </Button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      before={<PlusIcon />}
                      variant="primary"
                      shape="pill"
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="secondary"
                      shape="pill"
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="tertiary"
                      shape="pill"
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="outline"
                      shape="pill"
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="transparent"
                      shape="pill"
                    />
                    <Button before={<PlusIcon />} variant="link" shape="pill" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      shape="pill"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="secondary"
                      shape="pill"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="tertiary"
                      shape="pill"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="outline"
                      shape="pill"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="transparent"
                      shape="pill"
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="link"
                      shape="pill"
                    >
                      Button
                    </Button>
                  </div>
                </div>

                <div className="mx-auto flex max-w-fit items-start gap-10">
                  <div className="flex flex-col gap-4">
                    <Button
                      before={<PlusIcon />}
                      variant="primary"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="secondary"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="tertiary"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="outline"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="transparent"
                      destructive
                    />
                    <Button before={<PlusIcon />} variant="link" destructive />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="primary"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="secondary"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="tertiary"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="outline"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="transparent"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="link"
                      destructive
                    >
                      Button
                    </Button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      before={<PlusIcon />}
                      variant="primary"
                      shape="pill"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="secondary"
                      shape="pill"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="tertiary"
                      shape="pill"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="outline"
                      shape="pill"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="transparent"
                      shape="pill"
                      destructive
                    />
                    <Button
                      before={<PlusIcon />}
                      variant="link"
                      shape="pill"
                      destructive
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="secondary"
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="tertiary"
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="outline"
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="transparent"
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>

                    <Button
                      after={<PlusIcon />}
                      before={<PlusIcon />}
                      variant="link"
                      shape="pill"
                      destructive
                    >
                      Button
                    </Button>
                  </div>
                </div>

                <div className="grid gap-y-12">
                  <Separator my="4" size="4" />

                  <div className="flex items-center justify-center gap-7">
                    <Loading type="spinner" size="xxl" />
                    <Loading type="spinner" size="xl" />
                    <Loading type="spinner" size="lg" />
                    <Loading type="spinner" size="md" />
                    <Loading type="spinner" size="sm" />
                    <Loading type="spinner" size="xs" />
                    <Loading type="spinner" size="xxs" />
                  </div>

                  <div className="flex items-center justify-center gap-7">
                    <Loading type="line" size="xxs" />
                    <Loading type="line" size="xs" />
                    <Loading type="line" size="sm" />
                    <Loading type="line" size="md" />
                    <Loading type="line" size="lg" />
                    <Loading type="line" size="xl" />
                    <Loading type="line" size="xxl" />
                  </div>

                  <div className="flex items-center justify-center gap-7">
                    <Loading type="dots" size="xxl" />
                    <Loading type="dots" size="xl" />
                    <Loading type="dots" size="lg" />
                    <Loading type="dots" size="md" />
                    <Loading type="dots" size="sm" />
                    <Loading type="dots" size="xs" />
                    <Loading type="dots" size="xxs" />
                  </div>
                </div>
                <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
                  <ProgressBar
                    afterIndicator={<SpinnerIcon className="animate-spin" />}
                    helperText="27MB of 60MB"
                    indicator="50%"
                    label="Uploading..."
                    tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
                    value={50}
                  />

                  <ProgressBar
                    afterIndicator={
                      <CheckCircleIcon className="text-wg-green" />
                    }
                    color="green"
                    helperText="60MB of 60MB"
                    indicator="100%"
                    label="Uploading Complete"
                    tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
                    value={100}
                  />

                  <ProgressBar
                    afterIndicator={<CloseCircleIcon className="text-wg-red" />}
                    color="red"
                    helperText={
                      <span className="text-destructive">
                        Oops, something went wrong
                      </span>
                    }
                    label="Uploading Failed"
                    tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
                    value={100}
                  />

                  <ProgressBar
                    color="green"
                    indicator="368"
                    label="Class A"
                    max={500}
                    value={368}
                    variant="inline"
                  />

                  <ProgressBar
                    color="orange"
                    indicator="211"
                    label="Class B"
                    max={500}
                    value={211}
                    variant="inline"
                  />

                  <ProgressBar
                    color="red"
                    indicator="96"
                    label="Class C"
                    max={500}
                    value={96}
                    variant="inline"
                  />

                  <ProgressBar
                    afterIndicator={<CloseIcon />}
                    color="secondary"
                    description="(23.6MB)"
                    indicator={
                      <span className="text-surface-500">50% (9 sec left)</span>
                    }
                    label="design system.fig"
                    tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
                    value={50}
                  />

                  <ProgressBar
                    indicator="70%"
                    label="Please wait..."
                    value={70}
                    color="secondary"
                  />

                  <ProgressBar
                    afterIndicator={<SpinnerIcon className="animate-spin" />}
                    indicator="50%"
                    label="Progress"
                    tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
                    value={50}
                    variant="inline"
                  />

                  <ProgressBar
                    indicator="50% Complete"
                    value={50}
                    variant="inline"
                    color="blue"
                  />

                  <ProgressBar
                    afterIndicator={<CloseIcon />}
                    description="35%"
                    value={35}
                    variant="inline"
                    color="yellow"
                  />

                  <ProgressBar
                    value={70}
                    color="pink"
                    helperText="(650MB/1.12GB) · 17 seconds remaining"
                  />
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-6">
                    <ProgressCircle value={75} size="xs" />
                    <ProgressCircle value={75} size="sm" />
                    <ProgressCircle value={75} size="md" />
                    <ProgressCircle value={75} size="lg" />
                    <ProgressCircle value={75} size="xl" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="green" value={75} size="xl" />
                    <ProgressCircle color="green" value={75} size="lg" />
                    <ProgressCircle color="green" value={75} size="md" />
                    <ProgressCircle color="green" value={75} size="sm" />
                    <ProgressCircle color="green" value={75} size="xs" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="blue" value={75} size="xs" />
                    <ProgressCircle color="blue" value={75} size="sm" />
                    <ProgressCircle color="blue" value={75} size="md" />
                    <ProgressCircle color="blue" value={75} size="lg" />
                    <ProgressCircle color="blue" value={75} size="xl" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="orange" value={75} size="xl" />
                    <ProgressCircle color="orange" value={75} size="lg" />
                    <ProgressCircle color="orange" value={75} size="md" />
                    <ProgressCircle color="orange" value={75} size="sm" />
                    <ProgressCircle color="orange" value={75} size="xs" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="pink" value={75} size="xs" />
                    <ProgressCircle color="pink" value={75} size="sm" />
                    <ProgressCircle color="pink" value={75} size="md" />
                    <ProgressCircle color="pink" value={75} size="lg" />
                    <ProgressCircle color="pink" value={75} size="xl" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="yellow" value={75} size="xl" />
                    <ProgressCircle color="yellow" value={75} size="lg" />
                    <ProgressCircle color="yellow" value={75} size="md" />
                    <ProgressCircle color="yellow" value={75} size="sm" />
                    <ProgressCircle color="yellow" value={75} size="xs" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="red" value={75} size="xs" />
                    <ProgressCircle color="red" value={75} size="sm" />
                    <ProgressCircle color="red" value={75} size="md" />
                    <ProgressCircle color="red" value={75} size="lg" />
                    <ProgressCircle color="red" value={75} size="xl" />
                  </div>

                  <div className="flex items-center gap-6">
                    <ProgressCircle color="secondary" value={75} size="xl" />
                    <ProgressCircle color="secondary" value={75} size="lg" />
                    <ProgressCircle color="secondary" value={75} size="md" />
                    <ProgressCircle color="secondary" value={75} size="sm" />
                    <ProgressCircle color="secondary" value={75} size="xs" />
                  </div>
                </div>
              </div>
            </Flex>
          </Box>
        </ScrollArea>

        <Separator my="4" size="1" />
      </Container>
    </Theme>
  );
}

export default App;

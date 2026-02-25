"use client";

import { MainLayout } from "@/components/layout";
import {
  Button,
  Input,
  TextArea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  StatusBadge,
} from "@/components/ui";
import { ErrorState, EmptyState } from "@/components/states";

export default function DesignSystemPage() {
  return (
    <MainLayout
      topBarProps={{
        currentStep: 2,
        totalSteps: 5,
        status: "in-progress",
      }}
      contextHeaderProps={{
        headline: "Design System",
        subtext:
          "A calm, intentional foundation for building the Job Notification App with consistent components and clear patterns.",
      }}
      proofFooterProps={{
        items: [
          { label: "UI Built", checked: true },
          { label: "Logic Working", checked: false },
          { label: "Test Passed", checked: false },
          { label: "Deployed", checked: false },
        ],
      }}
      secondaryPanel={
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step Explanation</CardTitle>
              <CardDescription>
                This panel provides context and guidance for the current step in
                the workflow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#666666] text-sm leading-relaxed">
                The secondary panel is designed to hold step explanations,
                copyable prompt boxes, and contextual actions. It sticks to the
                viewport as users scroll through the primary workspace.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt Box</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-[#F7F6F3] border border-[#E5E4E1] rounded-md p-4">
                <code className="text-sm text-[#666666] font-mono">
                  npx create-next-app@latest
                </code>
              </div>
              <Button variant="secondary" size="sm" className="mt-4 w-full">
                Copy to Clipboard
              </Button>
            </CardContent>
          </Card>
        </div>
      }
    >
      {/* Primary Workspace Content */}
      <div className="space-y-10">
        {/* Typography Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Typography
          </h2>
          <Card>
            <CardContent className="space-y-6">
              <div>
                <span className="text-sm text-[#666666] mb-2 block">
                  Heading 1
                </span>
                <h1 className="font-serif text-4xl font-medium text-[#111111]">
                  The quick brown fox
                </h1>
              </div>
              <div>
                <span className="text-sm text-[#666666] mb-2 block">
                  Heading 2
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#111111]">
                  The quick brown fox
                </h2>
              </div>
              <div>
                <span className="text-sm text-[#666666] mb-2 block">
                  Heading 3
                </span>
                <h3 className="font-serif text-xl font-medium text-[#111111]">
                  The quick brown fox
                </h3>
              </div>
              <div>
                <span className="text-sm text-[#666666] mb-2 block">Body</span>
                <p className="text-base text-[#111111] leading-relaxed max-w-[720px]">
                  The quick brown fox jumps over the lazy dog. This is body text
                  at 16px with a line height of 1.6, designed for comfortable
                  reading. Text blocks are constrained to a maximum width of
                  720px for optimal readability.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Buttons
          </h2>
          <Card>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-[#666666] mb-3 block">
                    Primary Button
                  </span>
                  <div className="flex gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-[#666666] mb-3 block">
                    Secondary Button
                  </span>
                  <div className="flex gap-4">
                    <Button variant="secondary" size="sm">
                      Small
                    </Button>
                    <Button variant="secondary" size="md">
                      Medium
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large
                    </Button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-[#666666] mb-3 block">
                    Ghost Button
                  </span>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm">
                      Small
                    </Button>
                    <Button variant="ghost" size="md">
                      Medium
                    </Button>
                    <Button variant="ghost" size="lg">
                      Large
                    </Button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-[#666666] mb-3 block">
                    Disabled State
                  </span>
                  <div className="flex gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Inputs Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Form Inputs
          </h2>
          <Card>
            <CardContent className="space-y-6">
              <Input
                label="Text Input"
                placeholder="Enter your email address"
                helperText="We'll never share your email with anyone."
              />
              <Input
                label="Error State"
                placeholder="Enter your email"
                error="Please enter a valid email address."
              />
              <Input
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
              />
              <TextArea
                label="Text Area"
                placeholder="Enter a longer message..."
                helperText="Maximum 500 characters."
              />
            </CardContent>
          </Card>
        </section>

        {/* Status Badges Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Status Badges
          </h2>
          <Card>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <StatusBadge>Default</StatusBadge>
                <StatusBadge status="success">Success</StatusBadge>
                <StatusBadge status="warning">Warning</StatusBadge>
                <StatusBadge status="error">Error</StatusBadge>
                <StatusBadge status="info">Info</StatusBadge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Cards
          </h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card with Header</CardTitle>
                <CardDescription>
                  Cards use subtle borders and no heavy shadows for a clean,
                  modern appearance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">
                  This is the card content area. It can contain any components
                  or text needed for the interface.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Cancel</Button>
                <Button className="ml-3">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card padding="lg">
              <CardContent>
                <p className="text-[#666666]">
                  This card uses large padding for more spacious layouts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* States Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            States
          </h2>
          <div className="grid gap-6">
            <Card>
              <ErrorState
                title="Failed to load data"
                description="We couldn't retrieve your job applications. Please check your connection and try again."
                actionLabel="Try Again"
                onAction={() => {}}
                secondaryActionLabel="Contact Support"
                onSecondaryAction={() => {}}
              />
            </Card>

            <Card>
              <EmptyState
                title="No applications yet"
                description="Start tracking your job applications by adding your first one. We'll help you stay organized throughout your job search."
                actionLabel="Add Application"
                onAction={() => {}}
              />
            </Card>
          </div>
        </section>

        {/* Color System Section */}
        <section>
          <h2 className="font-serif text-2xl font-medium text-[#111111] mb-6">
            Color System
          </h2>
          <Card>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#F7F6F3] border border-[#E5E4E1]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Background</p>
                    <p className="text-sm text-[#666666]">#F7F6F3</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#111111]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Primary Text</p>
                    <p className="text-sm text-[#666666]">#111111</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#8B0000]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Accent</p>
                    <p className="text-sm text-[#666666]">#8B0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#4A7C59]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Success</p>
                    <p className="text-sm text-[#666666]">#4A7C59</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#B8860B]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Warning</p>
                    <p className="text-sm text-[#666666]">#B8860B</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#E5E4E1] border border-[#E5E4E1]"></div>
                  <div>
                    <p className="font-medium text-[#111111]">Border</p>
                    <p className="text-sm text-[#666666]">#E5E4E1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
}
